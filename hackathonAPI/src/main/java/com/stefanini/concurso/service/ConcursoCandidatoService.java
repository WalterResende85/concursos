package com.stefanini.concurso.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.concurso.DTO.ConcursoCandidatoDTO;
import com.stefanini.concurso.model.ConcursoCandidatoKey;
import com.stefanini.concurso.repository.ConcursoCandidatoRepository;

@Service
public class ConcursoCandidatoService {
		
		@Autowired
		ConcursoCandidatoRepository concursoCandidatoRepository;
		
		public ConcursoCandidatoDTO salvar(ConcursoCandidatoDTO concursoCandidatoDTO) {
			return concursoCandidatoRepository.save(concursoCandidatoDTO.tansformarParaEntidade()).tranformarParaDTO();
		}
		public ConcursoCandidatoDTO buscar(ConcursoCandidatoKey concursoCandidatoKey) {
			return concursoCandidatoRepository.findById(concursoCandidatoKey).get().tranformarParaDTO();
		}
		
		public Iterable<ConcursoCandidatoDTO> buscarTodos() {
			return concursoCandidatoRepository.buscarTodos();
			
		}
		public Iterable<ConcursoCandidatoDTO> buscarCandidatosPorconcurso(Long idConcurso){
			return concursoCandidatoRepository.buscarCandidatosPorConcurso(idConcurso);
		}
		public void deletar(ConcursoCandidatoKey concursoCandidatoKey) {
			concursoCandidatoRepository.deleteById(concursoCandidatoKey);
		}
		
}
