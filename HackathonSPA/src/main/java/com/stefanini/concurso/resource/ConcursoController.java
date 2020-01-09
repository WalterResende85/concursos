package com.stefanini.concurso.resource;

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

import com.stefanini.concurso.DTO.ConcursoDTO;
import com.stefanini.concurso.model.Concurso;
import com.stefanini.concurso.service.ConcursoService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/concursos")
@RestController
public class ConcursoController {

	@Autowired
	ConcursoService concursoService;

	@PostMapping
	public ResponseEntity<Concurso> salvar(@RequestBody ConcursoDTO dto) {
		Concurso concurso = concursoService.salvar(dto.transformarParaConcursoDTO());
		return new ResponseEntity<>(concurso, HttpStatus.CREATED);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Concurso> atualizar(@PathVariable Long id, @RequestBody ConcursoDTO dto) {
		Concurso existente = concursoService.buscar(id);
		if (existente == null) {
			return ResponseEntity.notFound().build();
		}
		BeanUtils.copyProperties(dto.transformarParaConcursoDTO(), existente, "id");
		existente = concursoService.salvar(existente);
		return ResponseEntity.ok(existente);
	}

	@GetMapping("/{id}")
	public Concurso buscar(@PathVariable Long id) {
		return concursoService.buscar(id);
	}

	@GetMapping
	public Iterable<Concurso> buscarTodos() {
		return concursoService.buscarTodos();
	}

	@DeleteMapping("/{id}")
	public void deletar(@PathVariable Long id) {
		concursoService.deletar(id);
	}
}
