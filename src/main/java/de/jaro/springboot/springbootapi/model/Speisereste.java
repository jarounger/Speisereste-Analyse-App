package de.jaro.springboot.springbootapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "speisereste")
public class Speisereste {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@NotEmpty
	private String typ;
	
	@NotEmpty
	private String gast;
	
	@NotNull
	private String speisen;
	
	@NotEmpty
	private String gewicht;
	
	@NotEmpty
	private String department;
	
	@NotEmpty
	private String grund;
	
	@NotEmpty
	private String datum;
	
	public Speisereste() {
		
	}

	public Speisereste(Integer id, String typ, String gast, String speisen, String gewicht, String department, String grund, String datum) {
		this.id = id;
		this.speisen = typ;
		this.speisen = gast;
		this.speisen = speisen;
		this.gewicht = gewicht;
		this.department = department;
		this.grund = grund;
		this.datum = datum;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTyp() {
		return typ;
	}

	public void setTyp(String typ) {
		this.typ = typ;
	}
	
	public String getGast() {
		return gast;
	}

	public void setGast(String gast) {
		this.gast = gast;
	}
	
	public String getSpeisen() {
		return speisen;
	}

	public void setSpeisen(String speisen) {
		this.speisen = speisen;
	}

	public String getGewicht() {
		return gewicht;
	}

	public void setGewicht(String gewicht) {
		this.gewicht = gewicht;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getGrund() {
		return grund;
	}

	public void setGrund(String grund) {
		this.grund = grund;
	}
	
	public String getDatum() {
		return datum;
	}

	public void setDatum(String datum) {
		this.datum = datum;
	}
	
	
}