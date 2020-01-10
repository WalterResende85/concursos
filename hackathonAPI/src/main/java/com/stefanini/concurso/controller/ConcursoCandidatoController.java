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

import com.stefanini.concurso.DTO.ConcursoCandidatoDTO;
import com.stefanini.concurso.exceptions.BusinessException;
import com.stefanini.concurso.model.ConcursoCandidatoKey;
import com.stefanini.concurso.service.ConcursoCandidatoService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/concursoCandidato")
@RestController
public class ConcursoCandidatoController {

	@Autowired
	ConcursoCandidatoService concursoCandidatoService;

	@PostMapping
	public ResponseEntity<Object> salvar(@RequestBody ConcursoCandidatoDTO concursoCandidatoDTO) {
		try {
			return ResponseEntity.ok(concursoCandidatoService.salvar(concursoCandidatoDTO));
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@PutMapping("/{idCandidato}/{idConcurso}")
	public ResponseEntity<Object> atualizar(@PathVariable Long idCandidato, @PathVariable Long idConcurso,
			@RequestBody ConcursoCandidatoDTO dto) {
		try {
			return ResponseEntity.ok(concursoCandidatoService.salvar(idCandidato, idConcurso, dto));
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping("/{idCandidato}/{idConcurso}")
	public ResponseEntity<Object> buscar(@PathVariable Long idCandidato, @PathVariable Long idConcurso) {
		try {
			return ResponseEntity
					.ok(concursoCandidatoService.buscar(new ConcursoCandidatoKey(idCandidato, idConcurso)));
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping
	public Iterable<ConcursoCandidatoDTO> buscarTodos() {
		return concursoCandidatoService.buscarTodos();
	}

	@DeleteMapping("/{idCandidato}/{idConcurso}")
	public ResponseEntity<Object> deletar(@PathVariable Long idCandidato, @PathVariable Long idConcurso) {
		try {
			concursoCandidatoService.deletar(new ConcursoCandidatoKey(idCandidato, idConcurso));
			return ResponseEntity.ok().build();
		} catch (BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}

	@GetMapping("/{idConcurso}")
	public ResponseEntity<Object> buscarCandidatosPorConcurso(@PathVariable Long idConcurso) {
		try {
			return ResponseEntity.ok(concursoCandidatoService.buscarCandidatosPorconcurso(idConcurso));
		}catch(BusinessException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
		
	}

}
