package com.stefanini.concurso.DTO;

import com.stefanini.concurso.model.Concurso;

public class ConcursoDTO {
	private String nome;
	private Integer numeroDeVagas;

	public Concurso transformarParaConcursoDTO() {
		return new Concurso(nome, numeroDeVagas);
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getNumeroDeVagas() {
		return numeroDeVagas;
	}

	public void setNumeroDeVagas(Integer numeroDeVagas) {
		this.numeroDeVagas = numeroDeVagas;
	}

}
