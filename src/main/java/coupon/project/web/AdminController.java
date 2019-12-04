package coupon.project.web;

import coupon.project.beans.Company;
import coupon.project.beans.Customer;
import coupon.project.facades.AdminFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

    @Autowired
    Map<String, Session> sessionMap;

    ////////////////////////////COMPANY////////////////////////////

    //add company
    @PostMapping("/addNewCompany/{token}")
    public ResponseEntity<Object> addNewCompany(@PathVariable String token, @RequestBody Company company) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.addCompany(company));
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

    //update company
    @PutMapping("/updateCompany/{token}")
    public ResponseEntity<Object> updateCompany(@PathVariable String token, @RequestBody Company company) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    adminFacade.updateCompany(company);
                    return ResponseEntity.ok(company);
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

    //delete company
    @DeleteMapping("/deleteCompany/{id}/{token}")
    public ResponseEntity<Object> deleteCompany(@PathVariable String token, @PathVariable int id) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    adminFacade.deleteCompany(id);
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

    //get all companies in the DB
    @GetMapping("/findAllCompanies/{token}")
    public ResponseEntity<Object> findAllCompanies(@PathVariable String token) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.getAllCompanies());
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

    //get one company
    @GetMapping("/findCompanyById/{id}/{token}")
    public ResponseEntity<Object> findCompanyById(@PathVariable String token, @PathVariable int id) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.findOneCompany(id));
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

    //check if company exist
    @GetMapping("/isCompanyExist/{email}/{password}/{token}")
    public ResponseEntity<Object> isCompanyExist(@PathVariable String token, @PathVariable String email, @PathVariable String password) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.isCompanyExists(email, password));
                } catch (Exception e) {
                    //find method return obj/null there is no need to use .ok , a better option is
                    //to use .notFound in case of false
                    return ResponseEntity.notFound().build();
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

    //find company by email
    @GetMapping("/findCompanyByEmail/{email}/{token}")
    public ResponseEntity<Object> findCompanyByEmail(@PathVariable String token, @PathVariable String email) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.findCompanyByEmail(email));
                } catch (Exception e) {
                    //find method return obj/null there is no need to use .ok , a better option is
                    //to use .notFound in case of false
                    return ResponseEntity.notFound().build();
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

    //find company by name
    @GetMapping("/findCompanyByName/{name}/{token}")
    public ResponseEntity<Object> findCompanyByName(@PathVariable String token, @PathVariable String name) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.findCompanyByName(name));
                } catch (Exception e) {
                    //find method return obj/null there is no need to use .ok , a better option is
                    //to use .notFound in case of false
                    return ResponseEntity.notFound().build();
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

    ////////////////////////////CUSTOMER////////////////////////////

    //add customer
    @PostMapping("/addNewCustomer/{token}")
    public ResponseEntity<Object> addNewCustomer(@PathVariable String token, @RequestBody Customer customer) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.addCustomer(customer));
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

    //delete customer
    @DeleteMapping("/deleteCustomer/{id}/{token}")
    public ResponseEntity<Object> deleteCustomer(@PathVariable String token, @PathVariable int id) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    adminFacade.deleteCustomer(id);
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

    //update customer
    @PutMapping("/updateCustomer/{token}")
    public ResponseEntity<Object> updateCustomer(@PathVariable String token, @RequestBody Customer customer) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    adminFacade.updateCustomer(customer);
                    return ResponseEntity.ok(customer);
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

    //get all customers in the DB
    @GetMapping("/findAllCustomers/{token}")
    public ResponseEntity<Object> findAllCustomers(@PathVariable String token) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.getAllCustomers());
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

    //check if customer exist
    @GetMapping("/isCustomerExist/{email}/{password}/{token}")
    public ResponseEntity<Object> isCustomerExist(@PathVariable String token, @PathVariable String email, @PathVariable String password) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.isCustomerExists(email, password));
                } catch (Exception e) {
                    //find method return obj/null there is no need to use .ok , a better option is
                    //to use .notFound in case of false
                    return ResponseEntity.notFound().build();
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

    //find customer by email
    @GetMapping("/findCustomerByEmail/{email}/{token}")
    public ResponseEntity<Object> findCustomerByEmail(@PathVariable String token, @PathVariable String email) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.findCustomerByEmail(email));
                } catch (Exception e) {
                    //find method return obj/null there is no need to use .ok , a better option is
                    //to use .notFound in case of false
                    return ResponseEntity.notFound().build();
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

    //find customer by id
    @GetMapping("/findCustomerById/{id}/{token}")
    public ResponseEntity<Object> findCustomerById(@PathVariable String token, @PathVariable int id) {
        Session session = sessionMap.get(token);
        if (session != null) {
            //each session lasts 1 hour
            if (System.currentTimeMillis() - session.getLastAction() < 1000 * 60 * 60) {
                AdminFacade adminFacade = (AdminFacade) session.getClientFacade();
                try {
                    return ResponseEntity.ok(adminFacade.findCustomerById(id));
                } catch (Exception e) {
                    //find method return obj/null there is no need to use .ok , a better option is
                    //to use .notFound in case of false
                    return ResponseEntity.notFound().build();
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






