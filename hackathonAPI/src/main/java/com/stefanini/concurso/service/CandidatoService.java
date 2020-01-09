package com.stefanini.concurso.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.concurso.model.Candidato;
import com.stefanini.concurso.repository.CandidatoRepository;
import com.stefanini.concurso.repository.ConcursoCandidatoRepository;

@Service
public class CandidatoService {

	@Autowired
	CandidatoRepository candidatoRepository;
	
	@Autowired
	ConcursoCandidatoRepository concursoCandidatoRepository;
	
	public Candidato salvar(Candidato candidato) {
		return candidatoRepository.save(candidato);
	}

	public Candidato buscar(Long id) {
		return candidatoRepository.findById(id).orElse(null);
	}
	
	public Iterable<Candidato> buscarTodos() {
		return candidatoRepository.findAll();
	}

	public void deletar(Long id) {
		concursoCandidatoRepository.deleteAll(concursoCandidatoRepository.findByConcursoCandidatoKeyIdCandidato(id));
		candidatoRepository.deleteById(id);
	}

}
