<?php
declare(strict_types=1);

// ImageTransformation SDK configuration

class ImageTransformationConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ImageTransformation",
                "slug" => "image-transformation",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://image.pollinations.ai",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "image_transformation" => [],
                ],
            ],
            "entity" => [
        'image_transformation' => [
          'fields' => [],
          'name' => 'image_transformation',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/prompt/{prompt}',
                  'segments' => [
                    [
                      'lit' => 'prompt',
                    ],
                    [
                      'var' => 'prompt',
                    ],
                  ],
                  'parts' => [
                    'prompt',
                    '{prompt}',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'prompt',
                        'orig' => 'prompt',
                        'type' => '`$STRING`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 'transform this image',
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'enhance',
                        'orig' => 'enhance',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'height',
                        'orig' => 'height',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'image',
                        'orig' => 'image',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'model',
                        'orig' => 'model',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'kontext',
                      ],
                      [
                        'name' => 'nologo',
                        'orig' => 'nologo',
                        'type' => '`$BOOLEAN`',
                        'kind' => 'query',
                        'example' => false,
                      ],
                      [
                        'name' => 'seed',
                        'orig' => 'seed',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'width',
                        'orig' => 'width',
                        'type' => '`$INTEGER`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'enhance',
                      'height',
                      'image',
                      'model',
                      'nologo',
                      'prompt',
                      'seed',
                      'width',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ImageTransformationFeatures::make_feature($name);
    }
}
