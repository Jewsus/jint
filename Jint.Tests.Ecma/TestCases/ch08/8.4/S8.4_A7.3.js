// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * <PS> between chunks of one string not allowed
 *
 * @path ch08/8.4/S8.4_A7.3.js
 * @description Insert <PS> between chunks of one string
 * @negative
 */

eval("var x = asdf\u2028ghjk");

