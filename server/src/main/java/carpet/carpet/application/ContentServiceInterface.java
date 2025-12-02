package carpet.carpet.application;

import java.util.List;

public interface ContentServiceInterface<T, D> {

    // Creates a T object with a D dto, and returns T.
    T create(D dto);

    // Updates the T object with a D dto, and returns that T.
    T update(D dto);

    // Fetches T by an id.
    T getById(Long id);

    // Fetches all T's in the database.
    List<T> getAll();

    // Deletes a T by id.
    void deleteById(Long id);

}