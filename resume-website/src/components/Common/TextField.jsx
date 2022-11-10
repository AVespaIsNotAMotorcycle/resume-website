import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MUITextField } from '@mui/material';

function TextField(
  {
    autoComplete,
    autoFocus,
    classes,
    color,
    defaultValue,
    disabled,
    error,
    FormHelperTextProps,
    fullWidth,
    helperText,
    id,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    margin,
    maxRows,
    minRows,
    multiline,
    name,
    onChange,
    placeholder,
    required,
    rows,
    select,
    SelectProps,
    size,
    sx,
    type,
    value,
    variant,
  },
) {
  return (
    <MUITextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      classes={classes}
      color={color}
      defaultValue={defaultValue}
      disabled={disabled}
      error={error}
      FormHelperTextProps={FormHelperTextProps}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      InputLabelProps={InputLabelProps}
      inputProps={inputProps}
      InputProps={InputProps} // eslint-disable-line
      inputRef={inputRef}
      label={label}
      margin={margin}
      maxRows={maxRows}
      minRows={minRows}
      multiline={multiline}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      select={select}
      SelectProps={SelectProps}
      size={size}
      sx={sx}
      type={type}
      value={value}
      variant={variant}
    />
  );
}

TextField.propTypes = {
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  classes: PropTypes.objectOf(PropTypes.shape({ current: PropTypes.instanceOf(Object) })),
  color: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  FormHelperTextProps: PropTypes.objectOf(PropTypes.shape(
    {
      current: PropTypes.instanceOf(Object),
    },
  )),
  fullWidth: PropTypes.bool,
  helperText: PropTypes.node,
  id: PropTypes.string,
  InputLabelProps: PropTypes.objectOf(PropTypes.shape({ current: PropTypes.instanceOf(Object) })),
  inputProps: PropTypes.objectOf(PropTypes.shape({ current: PropTypes.instanceOf(Object) })),
  InputProps: PropTypes.objectOf(PropTypes.shape({ current: PropTypes.instanceOf(Object) })),
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  label: PropTypes.node,
  margin: PropTypes.string,
  maxRows: PropTypes.number,
  minRows: PropTypes.number,
  multiline: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  select: PropTypes.bool,
  SelectProps: PropTypes.objectOf(PropTypes.shape({ current: PropTypes.instanceOf(Object) })),
  size: PropTypes.string,
  sx: PropTypes.instanceOf(Array),
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  variant: PropTypes.string,
};

TextField.defaultProps = {
  autoComplete: undefined,
  autoFocus: false,
  classes: undefined,
  color: 'primary',
  defaultValue: undefined,
  disabled: false,
  error: false,
  FormHelperTextProps: undefined,
  fullWidth: false,
  helperText: undefined,
  id: undefined,
  InputLabelProps: undefined,
  inputProps: undefined,
  InputProps: undefined,
  inputRef: undefined,
  label: undefined,
  margin: 'none',
  maxRows: undefined,
  minRows: undefined,
  multiline: false,
  name: undefined,
  onChange: undefined,
  placeholder: undefined,
  required: false,
  rows: undefined,
  select: false,
  SelectProps: undefined,
  size: undefined,
  sx: undefined,
  type: undefined,
  value: undefined,
  variant: 'outlined',
};

export default TextField;
