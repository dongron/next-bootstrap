import type { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

type SearchBarProps = {};

const SearchBar: FC<SearchBarProps> = ({}) => {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="E.g. networking"
        aria-label="Search input"
        aria-describedby="Search input"
      />
      <Button variant="primary" id="button-addon2" className="form-control__button">
        Search jobs
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
