# ImageTransformation SDK utility: make_context

from core.context import ImageTransformationContext


def make_context_util(ctxmap, basectx):
    return ImageTransformationContext(ctxmap, basectx)
