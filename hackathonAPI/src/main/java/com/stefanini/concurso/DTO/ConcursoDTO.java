package com.stefanini.concurso.DTO;

import com.stefanini.concurso.model.Concurso;

public class ConcursoDTO {
	private Long id;
	private String nome;
	private Integer quantidadeVagas;

	public ConcursoDTO() {
	}

	public ConcursoDTO(Long id, String nome, Integer quantidadeVagas) {
		super();
		this.id = id;
		this.nome = nome;
		this.quantidadeVagas = quantidadeVagas;
	}

	public Concurso transformarParaEntidade() {
		return new Concurso(id, nome, quantidadeVagas);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getQuantidadeVagas() {
		return quantidadeVagas;
	}

	public void setQuantidadeVagas(Integer quantidadeVagas) {
		this.quantidadeVagas = quantidadeVagas;
	}

}
