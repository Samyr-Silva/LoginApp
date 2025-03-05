package com.example.login_auth_api.infra.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.example.login_auth_api.model.user.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String secret;
    public String generateToken(User user){
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);

            String token = JWT.create()
                    .withIssuer("login-auth-api")
                    .withSubject(user.getEmail())
                    .withExpiresAt(this.genarateExpirationTime())
                    .sign(algorithm);
            return token;
        }
        catch (JWTCreationException e){
            throw new RuntimeException("ERROR, WHILE AUTHENTICATE!");
        }
    }


    public String validateToken(String token){
        try{
            Algorithm algorithm = Algorithm.HMAC256(secret);
            return JWT.require(algorithm)
                    .withIssuer("login-auth-api")
                    .build()
                    .verify(token)
                    .getSubject();
        }
        catch (JWTVerificationException e){
            return null;
        }
    }

    private Instant genarateExpirationTime(){
// Defina a data de hoje e configure para o início do dia com hora, minuto e segundo ajustados
        LocalDateTime dateTime = LocalDate.now()
                .plusDays(2) // Adiciona dois dias
                .atStartOfDay(); // Começo do dia, hora: 00:00

        // Se precisar de uma hora específica, como por exemplo às 14:00:
        dateTime = dateTime.withHour(14).withMinute(0).withSecond(0);

        // Retorna o Instant da data e hora configuradas
        return dateTime.atZone(ZoneId.systemDefault()).toInstant();
     }
}
