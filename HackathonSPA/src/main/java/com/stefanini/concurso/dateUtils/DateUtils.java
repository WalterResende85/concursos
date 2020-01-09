package com.stefanini.concurso.dateUtils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateUtils {

	public static String fomatarData(LocalDateTime data) throws Exception {
		if (data == null) {
			throw new Exception("Valor informado não condiz com um tipo data esperado.");
		}
		DateTimeFormatter dataBrasil = DateTimeFormatter.ofPattern("dd-MM-yyyy_hh-mm-ss");
		return dataBrasil.format(data);
	}
}
