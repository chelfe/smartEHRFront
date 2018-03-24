package fr.smartehr.front.web.rest;

import com.codahale.metrics.annotation.Timed;
import fr.smartehr.front.domain.Employee;

import fr.smartehr.front.repository.EmployeeRepository;
import fr.smartehr.front.repository.search.EmployeeSearchRepository;
import fr.smartehr.front.web.rest.errors.BadRequestAlertException;
import fr.smartehr.front.web.rest.util.HeaderUtil;
import fr.smartehr.front.service.dto.EmployeeDTO;
import fr.smartehr.front.service.mapper.EmployeeMapper;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing Employee.
 */
@RestController
@RequestMapping("/api")
public class EmployeeResource {

    private final Logger log = LoggerFactory.getLogger(EmployeeResource.class);

    private static final String ENTITY_NAME = "employee";

    private final EmployeeRepository employeeRepository;

    private final EmployeeMapper employeeMapper;

    private final EmployeeSearchRepository employeeSearchRepository;

    public EmployeeResource(EmployeeRepository employeeRepository, EmployeeMapper employeeMapper, EmployeeSearchRepository employeeSearchRepository) {
        this.employeeRepository = employeeRepository;
        this.employeeMapper = employeeMapper;
        this.employeeSearchRepository = employeeSearchRepository;
    }

    /**
     * POST  /employees : Create a new employee.
     *
     * @param employeeDTO the employeeDTO to create
     * @return the ResponseEntity with status 201 (Created) and with body the new employeeDTO, or with status 400 (Bad Request) if the employee has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/employees")
    @Timed
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO) throws URISyntaxException {
        log.debug("REST request to save Employee : {}", employeeDTO);
        if (employeeDTO.getId() != null) {
            throw new BadRequestAlertException("A new employee cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Employee employee = employeeMapper.toEntity(employeeDTO);
        employee = employeeRepository.save(employee);
        EmployeeDTO result = employeeMapper.toDto(employee);
        employeeSearchRepository.save(employee);
        return ResponseEntity.created(new URI("/api/employees/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /employees : Updates an existing employee.
     *
     * @param employeeDTO the employeeDTO to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated employeeDTO,
     * or with status 400 (Bad Request) if the employeeDTO is not valid,
     * or with status 500 (Internal Server Error) if the employeeDTO couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/employees")
    @Timed
    public ResponseEntity<EmployeeDTO> updateEmployee(@RequestBody EmployeeDTO employeeDTO) throws URISyntaxException {
        log.debug("REST request to update Employee : {}", employeeDTO);
        if (employeeDTO.getId() == null) {
            return createEmployee(employeeDTO);
        }
        Employee employee = employeeMapper.toEntity(employeeDTO);
        employee = employeeRepository.save(employee);
        EmployeeDTO result = employeeMapper.toDto(employee);
        employeeSearchRepository.save(employee);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, employeeDTO.getId().toString()))
            .body(result);
    }

    /**
     * GET  /employees : get all the employees.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of employees in body
     */
    @GetMapping("/employees")
    @Timed
    public List<EmployeeDTO> getAllEmployees() {
        log.debug("REST request to get all Employees");
        List<Employee> employees = employeeRepository.findAll();
        return employeeMapper.toDto(employees);
        }

    /**
     * GET  /employees/:id : get the "id" employee.
     *
     * @param id the id of the employeeDTO to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the employeeDTO, or with status 404 (Not Found)
     */
    @GetMapping("/employees/{id}")
    @Timed
    public ResponseEntity<EmployeeDTO> getEmployee(@PathVariable Long id) {
        log.debug("REST request to get Employee : {}", id);
        Employee employee = employeeRepository.findOne(id);
        EmployeeDTO employeeDTO = employeeMapper.toDto(employee);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(employeeDTO));
    }

    /**
     * DELETE  /employees/:id : delete the "id" employee.
     *
     * @param id the id of the employeeDTO to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/employees/{id}")
    @Timed
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {
        log.debug("REST request to delete Employee : {}", id);
        employeeRepository.delete(id);
        employeeSearchRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }

    /**
     * SEARCH  /_search/employees?query=:query : search for the employee corresponding
     * to the query.
     *
     * @param query the query of the employee search
     * @return the result of the search
     */
    @GetMapping("/_search/employees")
    @Timed
    public List<EmployeeDTO> searchEmployees(@RequestParam String query) {
        log.debug("REST request to search Employees for query {}", query);
        return StreamSupport
            .stream(employeeSearchRepository.search(queryStringQuery(query)).spliterator(), false)
            .map(employeeMapper::toDto)
            .collect(Collectors.toList());
    }

}
