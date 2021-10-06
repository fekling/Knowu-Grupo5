package com.example.knowuproject.repositorio;

import com.example.knowuproject.modelo.Evento;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventoRepository extends JpaRepository<Evento, Integer> {
}
