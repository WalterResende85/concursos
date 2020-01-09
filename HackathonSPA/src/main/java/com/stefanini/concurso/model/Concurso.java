package com.stefanini.concurso.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Concurso implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "NOME")
	private String nome;
	@Column(name = "NUMERODEVAGAS")
	private Integer numeroDeVagas;

	public Concurso() {

	}

	public Concurso(String nome, Integer numeroDeVagas) {
		super();
		this.nome = nome;
		this.numeroDeVagas = numeroDeVagas;
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getNumeroDeVagas() {
		return numeroDeVagas;
	}

	public void setNumeroDeVagas(Integer numeroDeVagas) {
		this.numeroDeVagas = numeroDeVagas;
	}

}
