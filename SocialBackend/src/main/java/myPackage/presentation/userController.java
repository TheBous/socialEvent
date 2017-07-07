package myPackage.presentation;

import myPackage.persistence.UserDAO;
import myPackage.persistence.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by thebous on 07/07/17.
 */
@RestController
public class userController {

    public final UserDAO userDao;

    @Autowired
    public userController(UserDAO userDao) {
        this.userDao = userDao;
    }

    @RequestMapping(value="/signup")
    @CrossOrigin(origins = "*")
    public void login(@RequestBody UserEntity user){
        System.out.println("controller signup");
        userDao.save(user);
    }

}
