import random

length = 20

password = ""
allowed_characters = ""

lower_case = "abcdefghijklmnopqrstuwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUWXYZ"
digits = "0123456789"
symbols = "!@#$%^&*()_+-=,.<>/?;:'\"[]{}\\|`~"

include_lower_case = True
include_upper_case = True
include_digits = True
include_symbols = True

if include_lower_case:
    allowed_characters += lower_case
if include_upper_case:
    allowed_characters += upper_case
if include_digits:
    allowed_characters += digits
if include_symbols:
    allowed_characters += symbols

for index in range(length):
    random_index = random.randint(0, len(allowed_characters) - 1)
    password += allowed_characters[random_index]

print("Generated password: " + password)
