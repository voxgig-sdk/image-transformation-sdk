package core

type ImageTransformationError struct {
	IsImageTransformationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewImageTransformationError(code string, msg string, ctx *Context) *ImageTransformationError {
	return &ImageTransformationError{
		IsImageTransformationError: true,
		Sdk:              "ImageTransformation",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ImageTransformationError) Error() string {
	return e.Msg
}
