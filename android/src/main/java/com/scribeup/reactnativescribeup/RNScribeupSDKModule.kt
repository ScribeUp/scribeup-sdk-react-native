package com.scribeup.reactnativescribeup

import android.app.Activity
import com.facebook.react.bridge.*
import io.scribeup.scribeupsdk.SubscriptionManager
import io.scribeup.scribeupsdk.SubscriptionManagerListener
import io.scribeup.scribeupsdk.data.models.SubscriptionManagerError

class RNScribeupSDKModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private var presentPromise: Promise? = null

    private val activityEventListener = object : BaseActivityEventListener() {
        override fun onActivityResult(activity: Activity, requestCode: Int, resultCode: Int, data: Intent?) {
            // Handle any activity results if needed
        }
    }

    init {
        reactContext.addActivityEventListener(activityEventListener)
    }

    override fun getName(): String = "RNScribeupSDK"

    @ReactMethod
    fun present(options: ReadableMap, promise: Promise) {
        val currentActivity = currentActivity ?: run {
            promise.reject("E_ACTIVITY_DOES_NOT_EXIST", "Activity doesn't exist")
            return
        }

        presentPromise = promise

        val url = options.getString("url")
        val productName = if (options.hasKey("productName")) options.getString("productName") else "Subscription Manager"

        try {
            SubscriptionManager.present(
                currentActivity,
                url,
                productName,
                object : SubscriptionManagerListener {
                    override fun onExit(error: SubscriptionManagerError?) {
                        presentPromise?.let { promise ->
                            if (error != null) {
                                promise.reject("E_SUBSCRIPTION_MANAGER_ERROR", error.message)
                            } else {
                                promise.resolve(null)
                            }
                            presentPromise = null
                        }
                    }
                }
            )
        } catch (e: Exception) {
            promise.reject("E_SUBSCRIPTION_MANAGER_ERROR", e.message)
        }
    }
} 