import { CheckCircleIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function StepsBullets({ steps }) {
    return (
        <div className="">
            <nav className="" aria-label="Progress">
                <ol role="list" className="space-y-3">
                    {steps.map((step, stepIdx) => (
                        <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? '' : '', 'relative')}>
                            {step.status === 'complete' ? (
                                <>
                                    {stepIdx !== steps.length - 1 ? (
                                        <div className="absolute left-2.5 top-3 -ml-px mt-0.5 h-full w-0.5 bg-gray-400" aria-hidden="true" />
                                    ) : null}
                                    <a href={step.href} className="group">
                                        <span className="flex items-start">
                                            <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center">
                                                <CheckCircleIcon
                                                    className="h-full w-full text-black-600 group-hover:text-black-800"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                            <span className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                                                {step.name}
                                            </span>
                                        </span>
                                    </a>
                                </>
                            ) : step.status === 'current' ? (
                                <>
                                    {stepIdx !== steps.length - 1 ? (
                                        <div className="absolute left-2.5 top-3 -ml-px mt-1 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                                    ) : null}
                                    <a href={step.href} className="flex items-start" aria-current="step">
                                        <span className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                                            <span className="absolute h-4 w-4 rounded-full bg-gray-300" />
                                            <span className="relative block h-2 w-2 rounded-full bg-secondary" />
                                        </span>
                                        <span className="ml-3 text-sm font-medium text-black-600">{step.name}</span>
                                    </a>
                                </>
                            ) : (
                                <>
                                    {stepIdx !== steps.length - 1 ? (
                                        <div className="absolute left-2.5 top-3 -ml-px mt-1 h-full w-0.5 bg-gray-300" aria-hidden="true" />
                                    ) : null}
                                    <a href={step.href} className="group">
                                        <div className="flex items-start">
                                            <div className="relative flex h-5 w-5 flex-shrink-0 items-center justify-center" aria-hidden="true">
                                                <div className="h-2 w-2 rounded-full bg-gray-300 group-hover:bg-gray-400" />
                                            </div>
                                            <p className="ml-3 text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</p>
                                        </div>
                                    </a>
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}