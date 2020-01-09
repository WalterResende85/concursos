package com.stefanini.concurso.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stefanini.concurso.model.Concurso;
import com.stefanini.concurso.repository.ConcursoRepository;


@Service
public class ConcursoService  {
	@Autowired
	ConcursoRepository concursoRepository;
	
	public Concurso salvar(Concurso concurso) {
		return concursoRepository.save(concurso);
	}
	public Concurso buscar(Long id) {
		return concursoRepository.findById(id).orElse(null);
	}
	public Iterable<Concurso> buscarTodos(){
		return concursoRepository.findAll();
	}
	public void deletar(Long id) {
		concursoRepository.deleteById(id);
	}
	
}
