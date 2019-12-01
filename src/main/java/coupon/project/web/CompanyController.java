package coupon.project.web;

import coupon.project.beans.Coupon;
import coupon.project.facades.CompanyFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("company")
public class CompanyController {

    @Autowired
    Map<String, Session> sessionMap;

    //add coupon
    @PostMapping("/addCoupon/{token}")
    public ResponseEntity<Object> addCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                CompanyFacade companyFacade = (CompanyFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(companyFacade.addCoupon(coupon));
                } catch (Exception e) {
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

    //update coupon
    @PutMapping("/updateCoupon/{token}")
    public ResponseEntity<Object> updateCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                CompanyFacade companyFacade = (CompanyFacade) session.getClientFacade();
                try {
                    companyFacade.updateCoupon(coupon);
                    return ResponseEntity.ok(coupon);
                } catch (Exception e) {
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

    //delete coupon
    @DeleteMapping("/deleteCoupon/{id}/{token}")
    public ResponseEntity<Object> deleteCoupon(@PathVariable String token, @PathVariable int id) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                CompanyFacade companyFacade = (CompanyFacade) session.getClientFacade();
                try {
                    companyFacade.deleteCoupon(id);
                    //delete method doesn't return anything there is no need to use .ok , a better option is
                    //to use .noContent
                    return ResponseEntity.noContent().build();
                } catch (Exception e) {
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

    //get one coupon
    @GetMapping("/findCouponById/{id}/{token}")
    public ResponseEntity<Object> findCouponById(@PathVariable String token, @PathVariable int id) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                CompanyFacade companyFacade = (CompanyFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(companyFacade.getOneCoupon(id));
                } catch (Exception e) {
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

    //get company details
    @GetMapping("/getCompanyDetails/{token}")
    public ResponseEntity<Object> getCompanyDetails(@PathVariable String token) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                CompanyFacade companyFacade = (CompanyFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(companyFacade.getCompanyDetails());
                } catch (Exception e) {
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

}
