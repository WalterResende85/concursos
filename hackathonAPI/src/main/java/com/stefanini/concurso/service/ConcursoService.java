package com.stefanini.concurso.service;

import java.util.Objects;

import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.concurso.DTO.ConcursoDTO;
import com.stefanini.concurso.exceptions.BusinessException;
import com.stefanini.concurso.model.Concurso;
import com.stefanini.concurso.repository.ConcursoCandidatoRepository;
import com.stefanini.concurso.repository.ConcursoRepository;

@Service
public class ConcursoService {
	@Autowired
	ConcursoRepository concursoRepository;

	@Autowired
	ConcursoCandidatoRepository concursoCandidatoRepository;

	public ConcursoDTO salvar(ConcursoDTO dto) {
		validarConcurso(dto);

		Concurso concurso = concursoRepository.save(dto.transformarParaEntidade());
		return concurso.tranformarParaDTO();
	}

	public ConcursoDTO salvar(Long id, ConcursoDTO dto) {
		ConcursoDTO concursoExistente = buscar(id);
		BeanUtils.copyProperties(dto.transformarParaEntidade(), concursoExistente);
		concursoExistente.setId(id);

		return salvar(concursoExistente);
	}

	public ConcursoDTO buscar(Long id) {
		if (Objects.nonNull(id)) {
			return concursoRepository.findById(id)
					.orElseThrow(() -> new BusinessException("Não foi encontrado um concurso com o id informado"))
					.tranformarParaDTO();
		}
		throw new BusinessException("Id do concurso não pode ser nulo");
	}

	public Iterable<Concurso> buscarTodos() {
		return concursoRepository.findAll();
	}

	public void deletar(Long id) {
		if (Objects.nonNull(id)) {
			Concurso concurso = concursoRepository.findById(id)
					.orElseThrow(() -> new BusinessException("Não foi encontrado um concurso com id informado"));
			concursoCandidatoRepository
					.deleteAll(concursoCandidatoRepository.findByConcursoCandidatoKeyIdConcurso(concurso.getId()));
			concursoRepository.delete(concurso);
		}
		throw new BusinessException("O id do concurso não pode ser nulo");
	}

	public void validarConcurso(ConcursoDTO dto) {
		if (Objects.isNull(dto)) {
			throw new BusinessException("O concurso não pode ser nulo");
		}
		if (Strings.isEmpty(dto.getNome())) {
			throw new BusinessException("O nome do concurso não pode ser nulo");
		}
	}
}
