package com.example.knowuproject.repositorio;

import com.example.knowuproject.modelo.Usuario;
import com.example.knowuproject.requisicao.UsuarioCadastroSimples;
import com.example.knowuproject.requisicao.UsuarioLoginSimples;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    public Usuario findByUsuario(String usuario);

    public Usuario findByEmail(String email);

    public Usuario findByCodigoRecuperaSenha(Integer codigo);


    // Querys para tests
    @Query("select new com.example.knowuproject.requisicao.UsuarioLoginSimples (u.usuario, u.senha) from Usuario u")
    List<UsuarioLoginSimples> findLoginUsuario();

    @Query("select new com.example.knowuproject.requisicao.UsuarioCadastroSimples.UsuarioCadastroSimples (u.nome, u.usuario, u.email, u.cpf, u.dataNascimento, u.genero, u.senha ) from Usuario u")
    List<UsuarioCadastroSimples> findCstroUsuario();



}
