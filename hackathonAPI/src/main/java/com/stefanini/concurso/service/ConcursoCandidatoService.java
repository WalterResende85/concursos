package com.stefanini.concurso.service;

import java.util.Objects;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.concurso.DTO.ConcursoCandidatoDTO;
import com.stefanini.concurso.exceptions.BusinessException;
import com.stefanini.concurso.model.ConcursoCandidato;
import com.stefanini.concurso.model.ConcursoCandidatoKey;
import com.stefanini.concurso.repository.ConcursoCandidatoRepository;

@Service
public class ConcursoCandidatoService {

	@Autowired
	ConcursoCandidatoRepository concursoCandidatoRepository;
	@Autowired
	CandidatoService candidatoService;
	@Autowired
	ConcursoService concursoService;
	

	public ConcursoCandidatoDTO salvar(ConcursoCandidatoDTO dto) {
		validarConcursoCandidato(dto);
		
		ConcursoCandidato concursoCandidato = concursoCandidatoRepository.save(dto.tansformarParaEntidade());
		return concursoCandidato.tranformarParaDTO();
	}

	public ConcursoCandidatoDTO salvar(Long idCandidato, Long idConcurso, ConcursoCandidatoDTO dto) {
		ConcursoCandidatoDTO ConcursoCandidatoExistente = buscar(new ConcursoCandidatoKey(idCandidato, idConcurso));
		
		BeanUtils.copyProperties(dto.tansformarParaEntidade(), ConcursoCandidatoExistente);
		ConcursoCandidatoExistente.setIdCandidato(idCandidato);
		ConcursoCandidatoExistente.setIdConcurso(idConcurso);
		
		return salvar(ConcursoCandidatoExistente);
	}
	public ConcursoCandidatoDTO buscar(ConcursoCandidatoKey concursoCandidatoKey) {
		if(Objects.nonNull(concursoCandidatoKey)) {
			return concursoCandidatoRepository.findById(concursoCandidatoKey).get().tranformarParaDTO();
		}
		throw new BusinessException("ConcursoCandidato não pode ser nulo");
	}

	public Iterable<ConcursoCandidatoDTO> buscarTodos() {
		return concursoCandidatoRepository.buscarTodos();

	}

	public Iterable<ConcursoCandidatoDTO> buscarCandidatosPorconcurso(Long idConcurso) {
		if(Objects.nonNull(idConcurso)) {
			return concursoCandidatoRepository.buscarCandidatosPorConcurso(idConcurso);
		}
		throw new BusinessException("id do Concurso não pode ser nulo");
	}

	public void deletar(ConcursoCandidatoKey concursoCandidatoKey) {
		
		concursoCandidatoRepository.deleteById(concursoCandidatoKey);
	}

	public void validarConcursoCandidato(ConcursoCandidatoDTO dto) {
		if (Objects.isNull(dto)) {
			throw new BusinessException("ConcursoCandidato não pode ser nulo");
		}

	}

}
