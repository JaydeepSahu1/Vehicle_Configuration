package com.example.token;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.core.userdetails.UserDetailsService;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfig {

    private final JwtFilter jwtfilter;
    private final UserDetailsService userDetailsService;

    public SecurityConfig(JwtFilter jwtFilter, UserDetailsService userDetailsService) {
        this.jwtfilter = jwtFilter;
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        System.out.println("securityFilterChain method");

        http
            .cors(withDefaults())
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers(
                    "/api/user/login",  
                    "/api/user/register",
                    "/images/**",
                    "/models/**"
                ).permitAll()
                .anyRequest().authenticated()
            );

        http.addFilterBefore(jwtfilter, UsernamePasswordAuthenticationFilter.class);
        

        return http.build();
    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration)
            throws Exception {
        return configuration.getAuthenticationManager();
    }
}
