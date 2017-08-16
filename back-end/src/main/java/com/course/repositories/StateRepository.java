package com.course.repositories;

import com.course.models.State;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by evgeniy on 08.03.17.
 */

public interface StateRepository extends JpaRepository<State, Integer> {

    State findByState(String state);
}
