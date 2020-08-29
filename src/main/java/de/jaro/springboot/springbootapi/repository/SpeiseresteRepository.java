package de.jaro.springboot.springbootapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import de.jaro.springboot.springbootapi.model.Speisereste;

public interface SpeiseresteRepository extends JpaRepository<Speisereste, Integer> {

}
