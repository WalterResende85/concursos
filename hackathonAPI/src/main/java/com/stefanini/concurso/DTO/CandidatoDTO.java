package com.stefanini.concurso.DTO;

import com.stefanini.concurso.model.Candidato;

public class CandidatoDTO {
	private Long id;
	private String nome;
	private String cpf;
	private String cidade;
	private String senha;
	
	public CandidatoDTO() {
	}

	

	public CandidatoDTO(Long id, String nome, String cpf, String cidade, String senha) {
		super();
		this.id = id;
		this.nome = nome;
		this.cpf = cpf;
		this.cidade = cidade;
		this.senha = senha;
	}

	public Candidato tansformarParaEntidade() {
		return new Candidato(id, nome, cpf, cidade, senha);
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	

}
