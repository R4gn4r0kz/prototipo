import re
from django.core.exceptions import ValidationError

class SpecialCharValidator:
    def validate(self, password, user=None):
        if not re.search(r'[^A-Za-z0-9]', password):
            raise ValidationError(
                "La contraseña debe incluir al menos un carácter especial.",
                code='no_special',
            )
    def get_help_text(self):
        return "Tu contraseña debe incluir al menos un carácter especial."
