package com.stefanini.concurso.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.stefanini.concurso.DTO.CandidatoDTO;

@Entity
public class Candidato implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID_CANDIDATO")
	private Long id;
	@Column(name = "NOME")
	private String nome;
	@Column(name = "CPF")
	private String cpf;
	@Column(name = "CIDADE")
	private String cidade;

	public Candidato() {

	}

	public Candidato(String nome, String cpf, String cidade) {
		super();
		this.nome = nome;
		this.cpf = cpf;
		this.cidade = cidade;
	}

	public Candidato(Long id, String nome, String cpf, String cidade) {
		super();
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.cidade = cidade;
	}

	public CandidatoDTO transformarParaCandidatoDTO() {
		return new CandidatoDTO(id, nome, cpf, cidade);
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
