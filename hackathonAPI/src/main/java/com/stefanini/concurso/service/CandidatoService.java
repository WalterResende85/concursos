package com.stefanini.concurso.service;

import java.util.List;
import java.util.Objects;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.stefanini.concurso.DTO.CandidatoDTO;
import com.stefanini.concurso.exceptions.BusinessException;
import com.stefanini.concurso.model.Candidato;
import com.stefanini.concurso.repository.CandidatoRepository;
import com.stefanini.concurso.repository.ConcursoCandidatoRepository;

@Service
public class CandidatoService {

	@Autowired
	CandidatoRepository candidatoRepository;

	@Autowired
	ConcursoCandidatoRepository concursoCandidatoRepository;

	public CandidatoDTO salvar(CandidatoDTO dto) {
		validarCandidato(dto);

		Candidato candidato = candidatoRepository.save(dto.tansformarParaEntidade());
		return candidato.transformarParaCandidatoDTO();
	}

	public CandidatoDTO salvar(Long id, CandidatoDTO dto) {
		CandidatoDTO candidatoExistente = buscar(id);
		BeanUtils.copyProperties(dto.tansformarParaEntidade(), candidatoExistente);
		candidatoExistente.setId(id);
		return salvar(candidatoExistente);
	}

	public CandidatoDTO buscar(Long id) {
		if (Objects.nonNull(id)) {
			return candidatoRepository.findById(id)
					.orElseThrow(() -> new BusinessException("Não foi encontrado um candidato com Id informado!"))
					.transformarParaCandidatoDTO();
		}
		throw new BusinessException("Id do candidato não pode ser nulo!");
	}

	public CandidatoDTO logar(CandidatoDTO dto) {

		if (Objects.nonNull(dto)) {
			CandidatoDTO candidatoDTO = candidatoRepository.findByCpf(dto.getCpf())
					.orElseThrow(() -> new BusinessException("Não foi encontrado um candidato com cpf informado!"))
					.transformarParaCandidatoDTO();

			if (candidatoDTO.getSenha().equals(dto.getSenha())) {
				return candidatoDTO;
			} else {
				throw new BusinessException("Senha incorreta");
			}
		}
		throw new BusinessException("O cpf do candidato não pode ser nulo!");
	}

	public Iterable<Candidato> buscarTodos() {
		return candidatoRepository.findAll();
	}

	public void deletar(Long id) {
		if (Objects.nonNull(id)) {
			Candidato candidato = candidatoRepository.findById(id)
					.orElseThrow(() -> new BusinessException("Não foi encontrado um candidato com Id informado!"));

			concursoCandidatoRepository
					.deleteAll(concursoCandidatoRepository.findByConcursoCandidatoKeyIdCandidato(candidato.getId()));
			candidatoRepository.delete(candidato);
			return;
		}
		throw new BusinessException("Id do candidato não pode ser nulo!");
	}

	public void validarCandidato(CandidatoDTO dto) {
		if(candidatoRepository.findByCpf(dto.getCpf()).isPresent()) {
			throw new BusinessException("Ja existe um candidato com o cpf informado!");
		}

		if (Objects.isNull(dto)) {
			throw new BusinessException("O candidato não pode ser nulo!");
		}
		if (StringUtils.isEmpty(dto.getNome())) {
			throw new BusinessException("O nome do candidato não pode ser nulo!");
		}

	}
}
