package myPackage.persistence;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

/**
 * Created by thebous on 07/07/17.
 */
@Repository
public interface UserDAO extends PagingAndSortingRepository<UserEntity, Integer>{
}
