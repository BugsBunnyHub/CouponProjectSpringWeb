package coupon.project.web;

import coupon.project.beans.Coupon;
import coupon.project.facades.CustomerFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("customer")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

    @Autowired
    Map<String, Session> sessionMap;


    //purchaseCoupon
    @PostMapping("/purchaseCoupon/{token}")
    public ResponseEntity<Object> purchaseCoupon(@PathVariable String token, @RequestBody Coupon coupon) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                CustomerFacade customerFacade = (CustomerFacade) session.getClientFacade();
                try {
                    customerFacade.purchaseCoupon(coupon);
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

    //delete coupon purchase
    @DeleteMapping("/deleteCouponPurchase/{token}")
    public ResponseEntity<Object> deleteCouponPurchase(@PathVariable String token, @RequestBody Coupon coupon) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                CustomerFacade customerFacade = (CustomerFacade) session.getClientFacade();
                try {
                    customerFacade.deleteCouponPurchase(coupon);
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

    @GetMapping("/getCustomerDetails/{token}")
    public ResponseEntity<Object> getCustomerDetails(@PathVariable String token) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                CustomerFacade customerFacade = (CustomerFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(customerFacade.getCustomerDetails());
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

    //used for coupon purchase in web
    @GetMapping("/getAllCoupons/{token}")
    public ResponseEntity<Object> getAllCoupons(@PathVariable String token) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                CustomerFacade customerFacade = (CustomerFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(customerFacade.getAllCoupons());
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



















