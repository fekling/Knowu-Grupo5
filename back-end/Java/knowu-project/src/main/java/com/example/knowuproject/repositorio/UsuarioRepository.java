package com.example.knowuproject.repositorio;

import com.example.knowuproject.modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    public Usuario findByUsuario(String usuario);

    public Usuario findByEmail(String email);

    public Usuario findByCodigoRecuperaSenha(Integer codigo);



}
