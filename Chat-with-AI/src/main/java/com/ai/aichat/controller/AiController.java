package com.ai.aichat.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ai.aichat.service.AiService;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/api/qna")
public class AiController {
	
	@Autowired
	private AiService aiService;
	
	@PostMapping("/question")
	public ResponseEntity<String> askQuestion(@RequestBody Map<String, String> payload)
	{
		String question = payload.get("question");
		String answer = aiService.getAnswer(question);
		return ResponseEntity.ok(answer);
		
	}

}