package com.generation;
import java.util.Scanner; //Falta import el paquete

public class ClasesScanner {
	
	public static void main(String [] args ) { //Falta el main
		
		Scanner sc;
		sc = new Scanner(System.in); // Falta entrada para new Scanner
		
		System.out.println("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
		String j1 = sc.nextLine();
		
		System.out.println("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
		Scanner s2 = new Scanner(System.in);
		String j2 = sc.nextLine();
		
		if(j1 == j2) {
			System.out.println("Empate");
		}else {
			int g = 2;
			switch(j1) {
			case "piedra":
				if(j2 == "tijeras") {
					g = 1;
				}
			case "papel":
				if(j2 == "piedra") {
					g = 1;
				}
			case "tijeras":
				if(j2.equals("papel")) { //se pone el método equals
					g = 1;
				}
				break;
			default:
			}
			System.out.println("Ganó el jugador " + g);
		}
		sc.close();
	}//Falta una llave 
	
}
