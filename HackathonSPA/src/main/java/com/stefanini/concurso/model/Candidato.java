package com.stefanini.concurso.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Candidato implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private Long id;
	@Column(name = "NOME")
	private String nome;
	@Column(name = "CPF")
	private String cpf;
	@Column(name = "CIDADE")
	private String cidade;
	@Column(name = "NOTA")
	private Double nota;
	@Column(name = "APROVADO")
	private boolean aprovado;

	public Candidato() {

	}
	

	public Candidato(String nome, String cpf, String cidade, Double nota) {
		super();
		this.nome = nome;
		this.cpf = cpf;
		this.cidade = cidade;
		this.nota = nota;
	}


	public Candidato(Long id, String nome, String cpf, String cidade, Double nota, boolean aprovado) {
		super();
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.cidade = cidade;
		this.nota = nota;
		this.aprovado = aprovado;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public Double getNota() {
		return nota;
	}

	public void setNota(Double nota) {
		this.nota = nota;
	}

	public boolean isAprovado() {
		return aprovado;
	}

	public void setAprovado(boolean aprovado) {
		this.aprovado = aprovado;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
}
