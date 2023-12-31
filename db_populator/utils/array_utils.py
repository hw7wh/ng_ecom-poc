# array_utils.py

class ArrayUtils:
    def __init__(self):
        pass

    @staticmethod
    def remove_duplicates_ordered(array):
        seen = set()
        result = []
        for element in array:
            if element not in seen:
                seen.add(element)
                result.append(element)
        return result
