package carpet.carpet.presentation;

import carpet.carpet.application.JwtService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = {"http://localhost:5173"})
public class LogInController {

    private final JwtService jwtService;

    @Value("${app.username}")
    private String appUsername;

    @Value("${app.password}")
    private String appPassword;

    public LogInController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping
    public Map<String, String> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");

        if (appUsername.equals(username) && appPassword.equals(password)) {
            String token = jwtService.generateToken(username);
            return Map.of("token", token);
        } else {
            return Map.of("error", "Invalid credentials");
        }
    }
}