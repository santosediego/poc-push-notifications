package com.santosediego.pocfcm.services;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Service;

//import com.devsuperior.pocfcm.dto.PushNotificationRequestDTO;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

@Service
public class FCMService {

	@PostConstruct
	public void initialize() throws IOException {
		FirebaseOptions options = FirebaseOptions.builder().setCredentials(GoogleCredentials.getApplicationDefault())
				.build();
		FirebaseApp.initializeApp(options);
	}
}
