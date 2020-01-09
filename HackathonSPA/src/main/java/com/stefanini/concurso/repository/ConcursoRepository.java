package com.stefanini.concurso.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.stefanini.concurso.model.Concurso;
@Repository
public interface ConcursoRepository extends JpaRepository<Concurso, Long> {

}
