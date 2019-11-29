package coupon.project.web;

import coupon.project.facades.ClientFacade;
import coupon.project.login.ClientType;
import coupon.project.login.InvalidClientTypeException;
import coupon.project.login.LoginFailedException;
import coupon.project.login.LoginManger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.UUID;

@RestController
public class LoginController {

    @Autowired
    Map<String, Session> sessionMap;
    @Autowired
    private LoginManger loginManger;

    @PostMapping("/login/{email}/{password}/{type}")
    public String login(@PathVariable String email, @PathVariable String password, @PathVariable ClientType type)
            throws InvalidClientTypeException, LoginFailedException {

        String token = UUID.randomUUID().toString();

        try {
            ClientFacade clientFacade = loginManger.login(email, password, type);
            if (clientFacade != null) {
                Session session = new Session(clientFacade, System.currentTimeMillis());
                sessionMap.put(token, session);
                return token;
            }

        } catch (InvalidClientTypeException | LoginFailedException e) {
            e.getMessage();
        }
        return HttpStatus.UNAUTHORIZED.toString();
    }


}
