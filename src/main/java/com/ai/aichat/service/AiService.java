package com.ai.aichat.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class AiService {
	
	@Value("${gemini.api.url}")
	private String geminiApiUrl;
	
	@Value("${gemini.api.key}")
	private String geminiApiKey;
	
	@Autowired
	private WebClient.Builder webclient;

	public String getAnswer(String question) {
	
		// Construct request payload
		
		Map<String, Object> requestBody = Map.of(
				"contents", new Object[] {
						Map.of("parts", new Object[] {
								Map.of("text", question)
						})
				});
		
		
		// Make API call
		String response = webclient.build().post()
						 .uri(geminiApiUrl+geminiApiKey)
						 .header("Content-Type", "application/json")
						 .bodyValue(requestBody)
						 .retrieve()
						 .bodyToMono(String.class)
						 .block();
		
		
		// return the result
		
		
		return response;
	}

}
