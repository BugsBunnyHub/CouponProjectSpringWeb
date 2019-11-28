package coupon.project.web;

import coupon.project.Exceptions.companyExistsException;
import coupon.project.Exceptions.companyNotFoundException;
import coupon.project.beans.Company;
import coupon.project.facades.AdminFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("admin")
public class AdminController {

    @Autowired
    Map<String, Session> sessionMap;

    //add company
    @PostMapping("/addCompany/{token}")
    public ResponseEntity<Object> addNewCompany(@PathVariable String token, @RequestBody Company company) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    adminFacade.addCompany(company);
                    return ResponseEntity.ok(company);
                } catch (companyExistsException e) {
                    return ResponseEntity.badRequest().body(e.getMessage());
                } finally {
                    //restart session timer after action is done by the user
                    session.setLastActionTimer(System.currentTimeMillis());
                }
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Session timeout");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login attempt");
        }

    }

    //update company
    @PostMapping("/updateCompany/{token}")
    public ResponseEntity<Object> updateCompany(@PathVariable String token, @RequestBody Company company) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    adminFacade.updateCompany(company);
                    return ResponseEntity.ok(company);
                } catch (companyNotFoundException e) {
                    return ResponseEntity.badRequest().body(e.getMessage());
                } finally {
                    //restart session timer after action is done by the user
                    session.setLastActionTimer(System.currentTimeMillis());
                }
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Session timeout");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login attempt");
        }

    }

    //delete company
    @DeleteMapping("/deleteCompany/{id}/{token}")
    public ResponseEntity<Object> deleteCompany(@PathVariable String token, @RequestParam int id) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    adminFacade.deleteCompany(id);
                    //since delete method doesn't return anything there is no need to use .ok , a better option is
                    //to use .noContent
                    return ResponseEntity.noContent().build();
                } finally {
                    //restart session timer after action is done by the user
                    session.setLastActionTimer(System.currentTimeMillis());
                }
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Session timeout");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized login attempt");
        }

    }
}


