package com.stefanini.concurso.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stefanini.concurso.DTO.ConcursoDTO;
import com.stefanini.concurso.exceptions.BusinessException;
import com.stefanini.concurso.model.Concurso;
import com.stefanini.concurso.service.ConcursoService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/concursos")
@RestController
public class ConcursoController {

	@Autowired
	private ConcursoService concursoService;

	@PostMapping
	public ResponseEntity<Object> salvar(@RequestBody ConcursoDTO dto) {
		try {
			return ResponseEntity.ok(concursoService.salvar(dto));
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}

	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> atualizar(@PathVariable Long id, @RequestBody ConcursoDTO dto) {
		try {
			return ResponseEntity.ok(concursoService.salvar(id, dto));
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}

	}

	@GetMapping("/{id}")
	public ResponseEntity<Object> buscar(@PathVariable Long id) {
		try {
			return ResponseEntity.ok(concursoService.buscar(id));
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}

	}

	@GetMapping
	public Iterable<Concurso> buscarTodos() {
		return concursoService.buscarTodos();
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deletar(@PathVariable Long id) {
		try {
			concursoService.deletar(id);
			return ResponseEntity.ok().build();
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}

	}
}
