package com.stefanini.concurso.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
import com.stefanini.concurso.model.Candidato;
import com.stefanini.concurso.service.CandidatoService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/candidatos")
@RestController
public class CandidatoController {

	@Autowired
	CandidatoService candidatoService;

	@PostMapping
	public ResponseEntity<Candidato> salvar(@RequestBody CandidatoDTO dto) {
		Candidato candidato = candidatoService.salvar(dto.tansformarParaEntidade());
		return new ResponseEntity<>(candidato, HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Candidato> atualizar(@PathVariable Long id, @RequestBody CandidatoDTO dto) {
		Candidato existente = candidatoService.buscar(id);
		if (existente == null) {
			return ResponseEntity.notFound().build();
		}
		BeanUtils.copyProperties(dto.tansformarParaEntidade(), existente);
		existente = candidatoService.salvar(existente);
		return ResponseEntity.ok(existente);
	}

	@GetMapping("/{id}")
	public Candidato buscar(@PathVariable Long id) {
		return candidatoService.buscar(id);
	}

	@GetMapping
	public Iterable<Candidato> buscarTodos() {
		return candidatoService.buscarTodos();
	}

	@DeleteMapping("/{id}")
	public void excluir(@PathVariable Long id) {
		candidatoService.deletar(id);

	}

}
