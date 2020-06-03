import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Question(props) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    props.addAnswer(props.title, event.target.value);
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">{props.index + 1}. {props.title}</FormLabel>
        <RadioGroup aria-label="answers" name="answers" value={value} onChange={handleChange}>
          {props.answers.map((answer, index) => (
            <FormControlLabel key={index} value={answer.answer} control={<Radio />} label={answer.answer} />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Question;
