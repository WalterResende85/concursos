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

import com.stefanini.concurso.DTO.CandidatoDTO;
import com.stefanini.concurso.exceptions.BusinessException;
import com.stefanini.concurso.model.Candidato;
import com.stefanini.concurso.service.CandidatoService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/candidatos")
@RestController
public class CandidatoController {

	@Autowired
	CandidatoService candidatoService;

	@PostMapping
	public ResponseEntity<Object> salvar(@RequestBody CandidatoDTO dto) {
		try {
			return ResponseEntity.ok(candidatoService.salvar(dto));
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> atualizar(@PathVariable Long id, @RequestBody CandidatoDTO dto) {
		try {
			return ResponseEntity.ok(candidatoService.salvar(id, dto));
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Object> buscar(@PathVariable Long id) {
		try {
			return ResponseEntity.ok(candidatoService.buscar(id));
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping
	public ResponseEntity<Iterable<Candidato>> buscarTodos() {
		return ResponseEntity.ok(candidatoService.buscarTodos());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> excluir(@PathVariable Long id) {
		try {
			candidatoService.deletar(id);
			return ResponseEntity.ok().build();
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

}
