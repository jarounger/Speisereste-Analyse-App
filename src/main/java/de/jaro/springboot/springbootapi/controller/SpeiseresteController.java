package de.jaro.springboot.springbootapi.controller;

import de.jaro.springboot.springbootapi.repository.SpeiseresteRepository;
import de.jaro.springboot.springbootapi.model.Speisereste;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.MediaType;


@RestController
public class SpeiseresteController {

	@Autowired
    SpeiseresteRepository speiseresteRepository;
 
	
	// GET
	
    @RequestMapping(
            method = RequestMethod.GET,
            path = "/speisereste",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public List<Speisereste> getPerson(){
 
        List<Speisereste> speiseresteList =  speiseresteRepository.findAll();
 
        return speiseresteList;
    }
    
    
    // POST
    
    @RequestMapping(
            method = RequestMethod.POST,
            path = "/speisereste",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public Speisereste saveSpeisereste(@RequestBody Speisereste speisereste){
 
        return speiseresteRepository.save(speisereste);
    }
    
    
    // PUT
    
    @RequestMapping(
            method = RequestMethod.PUT,
            path = "/speisereste",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    
    @Transactional
    public Speisereste updateSpeisereste(@RequestBody Speisereste speisereste){
     
        Speisereste updateSpeisereste = speiseresteRepository.getOne(speisereste.getId());
     
        updateSpeisereste.setTyp(speisereste.getTyp());
        updateSpeisereste.setGast(speisereste.getGast());
        updateSpeisereste.setSpeisen(speisereste.getSpeisen());
        updateSpeisereste.setGewicht(speisereste.getGewicht());
        updateSpeisereste.setDepartment(speisereste.getDepartment());
        updateSpeisereste.setGrund(speisereste.getGrund());
        updateSpeisereste.setDatum(speisereste.getDatum());;
       
        return speiseresteRepository.saveAndFlush(updateSpeisereste);
    }
    
   
    // DELETE
    
    @RequestMapping(
            method = RequestMethod.DELETE,
            value = "/speisereste/{id}"
    )
    public void deleteSpeisereste(@PathVariable("id") Integer id){
        speiseresteRepository.deleteById(id);
    }
    
}
